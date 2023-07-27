import { useParams } from "@tanstack/router";

interface ProfileUserProps {}

export function ProfileUser({}: ProfileUserProps) {
  const { id } = useParams();
  return (
    <div className="w-full h-full min-h-screen flex flex-col border items-center justify-center ">
      <h2 className="text-xl">{`Profile Page for ${id}`}</h2>
    </div>
  );
}
