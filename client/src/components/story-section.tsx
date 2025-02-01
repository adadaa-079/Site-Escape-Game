import { Card, CardContent } from "@/components/ui/card";

export function StorySection() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Lettre à Aude</h2>

        <div className="prose prose-stone dark:prose-invert">
          <p>
            Je t'envoie cette lettre pour t'annoncer quelque chose de la plus
            haute importance. Cela peut te paraître incensé mais ce message, et
            cette boîte vient du futur. Un évennnement irréparable et inarétable
            va se produire dans quelques jours : une Bombe plus puissant que
            jamais s'apprête à détruire la Terre.
          </p>

          <p>
            Seule une femme pouvait l'arrêter, à la condition qu'elle possède un
            objet. Cette femme c'est toi. Seulement, la Aude que je connais n'a
            pas obtenu cet objet à temps.
          </p>

          <p>
            C'est pourquoi j'ai conçu cette boîte, faite pour n'être ouvrable
            que par toi, pour que tu trouve l'objet et que tu désamorce la
            bombe. J'espère que tu arriveras à arriver au bout, avant qu'il ne
            soit trop tard...
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
