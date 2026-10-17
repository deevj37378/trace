// Renders text where **phrases** are underlined, as on the original site.
export function Rich({ text }: { text: string }) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith("**") ? (
      <span key={i} className="text-fg underline decoration-line-strong decoration-1 underline-offset-4">
        {part.slice(2, -2)}
      </span>
    ) : (
      part
    ),
  );
}
