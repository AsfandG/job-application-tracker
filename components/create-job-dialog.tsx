import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface CreateApplicationDialog {
  columnId: string;
  boardId: string;
}

export default function CreateJobApplicationDialog({
  columnId,
  boardId,
}: CreateApplicationDialog) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">
          <Plus />
          Add Job
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Job Description</DialogTitle>
          <DialogDescription>Track a new job application</DialogDescription>
        </DialogHeader>

        <form>
          <div>
            <div>
              <div>
                <Label htmlFor="company">Company *</Label>
                <Input id="company" required />
              </div>
              <div>
                <Label htmlFor="position">Position *</Label>
                <Input id="position" required />
              </div>
            </div>

            <div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" required />
              </div>
              <div>
                <Label htmlFor="salary">Salary</Label>
                <Input id="salary" required />
              </div>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
