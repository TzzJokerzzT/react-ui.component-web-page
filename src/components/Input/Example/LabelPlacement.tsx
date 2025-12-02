import { Input } from "../Input";

export const LabelPlacementInput = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-black dark:text-primary-50 mb-4">
        Label Placements
      </h2>
      <div className="space-y-6">
        <Input
          labelPlacement="inside"
          label="Inside (Default)"
          placeholder="Label inside input"
          data-testid="inside-label-input"
        />
        <Input
          labelPlacement="outside"
          label="Outside"
          placeholder="Label outside input"
          data-testid="outside-label-input"
        />
        <Input
          labelPlacement="outside-left"
          label="Outside Left"
          placeholder="Label on the left"
          data-testid="outside-left-label-input"
        />
      </div>
    </section>
  );
};
