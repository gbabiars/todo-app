import { FormattedMessage } from "react-intl";
import { Toast } from "radix-ui";

interface UpdateErrorToastProps {
  open: boolean;
  onOpenChange: () => void;
}

function UpdateErrorToast({ open, onOpenChange }: UpdateErrorToastProps) {
  return (
    <Toast.Root
      open={open}
      onOpenChange={onOpenChange}
      className="bg-red-500 text-white p-4 rounded-md"
    >
      <FormattedMessage
        id="error.saving"
        defaultMessage="Error updating todo item, please try again later."
      />
    </Toast.Root>
  );
}

export default UpdateErrorToast;
