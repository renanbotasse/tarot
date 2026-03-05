import { SpreadSession } from "../entities/SpreadSession";

/** Returns true if the session has at least one unrevealed card. */
export function canRevealNext(session: SpreadSession): boolean {
  return session.revealedCount < session.drawnCards.length;
}

/** Returns true if the given position can be revealed right now (sequential). */
export function canRevealPosition(session: SpreadSession, positionId: string): boolean {
  const card = session.drawnCards.find((c) => c.position.id === positionId);
  if (!card || card.isRevealed) return false;
  // Sequential: only the next-in-line position can be revealed
  const nextIndex = session.revealedCount;
  return session.drawnCards[nextIndex]?.position.id === positionId;
}
