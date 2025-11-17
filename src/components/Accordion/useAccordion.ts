import { useState, useCallback, useMemo } from 'react';
import type { 
  UseAccordionConfig, 
  UseAccordionReturn,
  AccordionSelectionMode
} from './types';

/**
 * Custom hook for managing accordion state and behavior
 */
export const useAccordion = (config: UseAccordionConfig = {}): UseAccordionReturn => {
  const {
    selectionMode = 'single',
    defaultExpandedKeys = [],
    expandedKeys: controlledExpandedKeys,
    onExpandedChange,
    onSelectionChange,
    isDisabled = false
  } = config;

  // Internal state for uncontrolled mode
  const [internalExpandedKeys, setInternalExpandedKeys] = useState<string[]>(defaultExpandedKeys);

  // Determine if we're in controlled mode
  const isControlled = controlledExpandedKeys !== undefined;
  const expandedKeys = isControlled ? controlledExpandedKeys : internalExpandedKeys;

  // Update expanded keys
  const updateExpandedKeys = useCallback((newKeys: string[]) => {
    if (isDisabled) return;

    if (!isControlled) {
      setInternalExpandedKeys(newKeys);
    }
    
    onExpandedChange?.(newKeys);
  }, [isControlled, isDisabled, onExpandedChange]);

  // Check if a specific item is expanded
  const isExpanded = useCallback((key: string): boolean => {
    return expandedKeys.includes(key);
  }, [expandedKeys]);

  // Toggle a specific item
  const toggle = useCallback((key: string) => {
    if (isDisabled) return;

    let newExpandedKeys: string[];

    if (selectionMode === 'single') {
      // Single mode: only one item can be expanded at a time
      newExpandedKeys = isExpanded(key) ? [] : [key];
      
      // Call single selection change handler
      if (onSelectionChange) {
        onSelectionChange(isExpanded(key) ? '' : key);
      }
    } else if (selectionMode === 'multiple') {
      // Multiple mode: toggle the item
      newExpandedKeys = isExpanded(key)
        ? expandedKeys.filter(k => k !== key)
        : [...expandedKeys, key];
    } else {
      // None mode: don't change anything (controlled externally)
      return;
    }

    updateExpandedKeys(newExpandedKeys);
  }, [
    isDisabled,
    selectionMode,
    isExpanded,
    expandedKeys,
    updateExpandedKeys,
    onSelectionChange
  ]);

  // Expand a specific item
  const expand = useCallback((key: string) => {
    if (isDisabled) return;

    if (isExpanded(key)) return; // Already expanded

    let newExpandedKeys: string[];

    if (selectionMode === 'single') {
      newExpandedKeys = [key];
      onSelectionChange?.(key);
    } else if (selectionMode === 'multiple') {
      newExpandedKeys = [...expandedKeys, key];
    } else {
      return;
    }

    updateExpandedKeys(newExpandedKeys);
  }, [
    isDisabled,
    selectionMode,
    isExpanded,
    expandedKeys,
    updateExpandedKeys,
    onSelectionChange
  ]);

  // Collapse a specific item
  const collapse = useCallback((key: string) => {
    if (isDisabled) return;

    if (!isExpanded(key)) return; // Already collapsed

    const newExpandedKeys = expandedKeys.filter(k => k !== key);
    updateExpandedKeys(newExpandedKeys);

    if (selectionMode === 'single' && onSelectionChange) {
      onSelectionChange('');
    }
  }, [
    isDisabled,
    isExpanded,
    expandedKeys,
    updateExpandedKeys,
    selectionMode,
    onSelectionChange
  ]);

  // Expand all items (only works in multiple mode)
  const expandAll = useCallback((keys: string[] = []) => {
    if (isDisabled || selectionMode !== 'multiple') return;

    updateExpandedKeys(keys);
  }, [isDisabled, selectionMode, updateExpandedKeys]);

  // Collapse all items
  const collapseAll = useCallback(() => {
    if (isDisabled) return;

    updateExpandedKeys([]);
    
    if (selectionMode === 'single' && onSelectionChange) {
      onSelectionChange('');
    }
  }, [isDisabled, updateExpandedKeys, selectionMode, onSelectionChange]);

  // Set expanded keys directly
  const setExpandedKeys = useCallback((keys: string[]) => {
    updateExpandedKeys(keys);
  }, [updateExpandedKeys]);

  // Memoize the return value to prevent unnecessary re-renders
  return useMemo(() => ({
    expandedKeys,
    isExpanded,
    toggle,
    expand,
    collapse,
    expandAll,
    collapseAll,
    setExpandedKeys
  }), [
    expandedKeys,
    isExpanded,
    toggle,
    expand,
    collapse,
    expandAll,
    collapseAll,
    setExpandedKeys
  ]);
};

/**
 * Hook for simple accordion behavior (single mode only)
 */
export const useSimpleAccordion = (defaultKey?: string) => {
  return useAccordion({
    selectionMode: 'single',
    defaultExpandedKeys: defaultKey ? [defaultKey] : [],
  });
};

/**
 * Hook for multiple accordion behavior
 */
export const useMultipleAccordion = (defaultKeys: string[] = []) => {
  return useAccordion({
    selectionMode: 'multiple',
    defaultExpandedKeys: defaultKeys,
  });
};

/**
 * Hook for controlled accordion behavior
 */
export const useControlledAccordion = (
  expandedKeys: string[],
  onExpandedChange: (keys: string[]) => void,
  selectionMode: AccordionSelectionMode = 'single'
) => {
  return useAccordion({
    selectionMode,
    expandedKeys,
    onExpandedChange,
  });
};