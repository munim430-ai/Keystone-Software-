interface Props {
  className?: string;
}

export default function KeystoneLogo({ className = '' }: Props) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}image.svg`}
      alt="Keystone Software Solutions"
      className={className}
      draggable={false}
    />
  );
}
