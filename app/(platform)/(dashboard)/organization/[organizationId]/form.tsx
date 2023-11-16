"use client";
import { createBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/use-action";

const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS!");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <input type="text" placeholder="Enter" name="title" required />
      <button>Submit</button>
    </form>
  );
};

export default Form;
