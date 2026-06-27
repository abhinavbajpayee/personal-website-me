import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <Container className="pt-44 pb-32 text-center">
      <p className="font-mono text-sm text-ink-faint mb-4">404</p>
      <h1 className="font-display text-3xl md:text-4xl mb-4">
        This room doesn't exist.
      </h1>
      <p className="text-ink-muted mb-8 max-w-md mx-auto">
        The page you're looking for isn't here. Let's get you back to the front door.
      </p>
      <Button to="/" variant="primary">
        Back to home
      </Button>
    </Container>
  );
}
