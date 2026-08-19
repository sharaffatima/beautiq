export default function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <svg viewBox="0 0 200 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12 H80" />
        <path d="M80 12 C 88 2, 96 2, 100 12 C 104 22, 112 22, 120 12" />
        <path d="M120 12 H200" />
      </svg>
    </div>
  );
}
