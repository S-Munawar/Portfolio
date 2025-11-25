export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return Response.json({ error: "Username required" }, { status: 400 });
  }

  const query = {
    query: `
      query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `
  };

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`
    },
    body: JSON.stringify(query)
  });

  const data = await res.json();

  const contributions = data?.data?.user?.contributionsCollection?.contributionCalendar;

  return Response.json({
    totalContributions: contributions?.totalContributions || 0,
  });
}
