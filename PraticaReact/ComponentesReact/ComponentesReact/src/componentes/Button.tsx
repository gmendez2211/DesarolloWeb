type Props = {
  //children: ReactNode;
  texto: string;
};

export default function Button(props: Props) {
  const { texto } = props;

  return (
    <button type="submit" className="btn btn-outline-primary">
      {texto}
    </button>
  );
}
