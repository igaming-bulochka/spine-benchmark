import { useNavigate } from "react-router-dom";
import { Boxes } from "lucide-react";

import { useLoadSkeleton, LIBRARY } from "@/features/load-skeleton";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/shared/ui/drawer";
import { ScrollArea } from "@/shared/ui/scroll-area";

/**
 * Library tool - a bottom shadcn Drawer with a scrollable catalog of bundled
 * spines. Clicking one closes the drawer and runs it through the same
 * load -> measure -> materialize flow as a file drop.
 */
export function LibraryDrawer() {
  const navigate = useNavigate();
  const { loadFromLibrary } = useLoadSkeleton();

  const close = () => navigate("/");

  const pick = (id: string) => {
    const item = LIBRARY.find((i) => i.id === id);
    if (!item) return;
    close();
    void loadFromLibrary(item);
  };

  return (
    <Drawer open onOpenChange={(open) => !open && close()}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-4xl">
          <DrawerHeader>
            <DrawerTitle>Library</DrawerTitle>
            <DrawerDescription>
              Pick a spine to load it onto the stage.
            </DrawerDescription>
          </DrawerHeader>
          <ScrollArea className="max-h-[46vh] px-4 pb-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {LIBRARY.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => pick(item.id)}
                  className="group flex flex-col items-start gap-2 rounded-xl border border-border bg-card/60 p-4 text-left transition-all hover:border-primary/50 hover:bg-accent"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary/15">
                    <Boxes className="size-5" />
                  </div>
                  <div className="font-medium leading-tight">{item.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {item.note}
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
