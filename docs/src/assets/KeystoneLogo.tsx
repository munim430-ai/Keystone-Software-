interface Props {
  className?: string;
}

export default function KeystoneLogo({ className = '' }: Props) {
  return (
    <img
      src="/logo.png"
      alt="Keystone Software Solutions"
      className={`invert ${className}`}
      draggable={false}
    />
  );
}
