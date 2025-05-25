export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center p-4 mt-8">
      © {new Date().getFullYear()} AutoDex – Všetky práva vyhradené
    </footer>
  );
}