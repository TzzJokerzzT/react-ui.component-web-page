import { ButtonGroup, Button } from "../button";

export const GroupButtons = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium text-black dark:text-primary-50 mb-2">
          Regular Group
        </h3>
        <ButtonGroup>
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </div>

      <div>
        <h3 className="text-lg font-medium text-black dark:text-primary-50 mb-2">
          Attached Group
        </h3>
        <ButtonGroup isAttached>
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </div>

      <div>
        <h3 className="text-lg font-medium text-black dark:text-primary-50 mb-2">
          Outlined Group
        </h3>
        <ButtonGroup variant="outline" color="primary">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
