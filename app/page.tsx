import ItemForm from "./item-form";
import { apiBaseURL, listItems } from "../lib/api";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const items = await listItems();

  return (
    <main>
      <h1>meshbay-sample-next-web</h1>
      <p>
        Next.js 15 server component, reading <code>API_URL</code> at runtime: <code>{apiBaseURL()}</code>
      </p>
      <ItemForm />
      {items.length === 0 ? (
        <p className="empty">No items yet.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              #{item.id} {item.name}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
