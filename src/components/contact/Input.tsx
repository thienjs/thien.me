interface InputProps {
  placeholder: string
  name: string
  formRef: any
}

export default function Input(props: InputProps) {
  return (
    <input
      className="w-full rounded p-4 text-xl"
      name={props.name}
      placeholder={props.placeholder}
      ref={props.formRef}
    />
  )
}
