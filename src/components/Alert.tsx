type Props = {
  message: string;
};

export default function Alert({ message }: Props) {
  return (
    <div className="rounded bg-red-100 p-4 my-2">
      <p className="text-sm leading-5 text-red-700">{message}</p>
    </div>
  );
}