import { AvatarBase } from '@/components/avatar/AvatarBase';
import { CardBase } from '@/components/card/CardBase';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function TimelineListView() {
  return (
    <Tabs defaultValue="invited">
      <TabsList className="w-full flex">
        <TabsTrigger value="invited">Invited</TabsTrigger>
        <TabsTrigger value="accepted">Accepted</TabsTrigger>
      </TabsList>
      <TabsContent value="invited" className="mt-4">
        <CardBase className="pb-4 text-gray-600" aria-labelledby="lead-name">
          <header className="pt-4">
            <div className="px-6 flex gap-4 items-center">
              <AvatarBase src="https://github.com/shadcn.pnsg" fallback="B" />
              <div className="leading-snug">
                <h2 id="lead-name" className="text-black font-semibold">
                  Bill
                </h2>
                <time dateTime="2025-01-04T14:37:00-05:00">
                  January 4 @ 2:37pm
                </time>
              </div>
            </div>

            <nav
              aria-label="Lead details"
              className="px-6 pt-4 mt-4 border-t-1 text-lg border-gray-100"
            >
              <ul className="flex gap-4">
                <li>Yandera 2574</li>
                <li>Painters</li>
                <li>Job ID: 5577421</li>
              </ul>
            </nav>
          </header>

          <main className="px-6 pt-4 mt-4 border-t-1 border-gray-100">
            <section aria-labelledby="lead-description">
              <h3 id="lead-description" className="sr-only">
                Lead Description
              </h3>

              <p>Need to paint 2 aluminum windows and a sliding glass door</p>
            </section>
          </main>

          <footer className="flex items-center gap-4 px-6 pt-4 mt-4 border-t-1 border-gray-100">
            <div className="flex items-center gap-2">
              <Button>Accept</Button>
              <Button>Decline</Button>
            </div>
            <div className="text-lg">
              <p>
                <strong>$62.00</strong> Lead Invitation
              </p>
            </div>
          </footer>
        </CardBase>
      </TabsContent>
      <TabsContent value="accepted">Accepted list.</TabsContent>
    </Tabs>
  );
}
