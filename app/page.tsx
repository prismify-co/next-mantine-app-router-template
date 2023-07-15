import { Welcome } from '~/components/welcome';
import { ColorSchemeToggle } from '~/components/color-scheme-toggle';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
