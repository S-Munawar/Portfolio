export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return new Response(JSON.stringify({ error: "Username is required" }), {
      status: 400
    });
  }

  const query = {
    query: `{
      matchedUser(username: "${username}") {
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }`
  };

  const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    body: JSON.stringify(query),
    headers: { "Content-Type": "application/json" }
  });

  const data = await res.json();

  const stats = data?.data?.matchedUser?.submitStats?.acSubmissionNum;

  return Response.json({
    total: stats?.[0]?.count || 0,
    easy: stats?.[1]?.count || 0,
    medium: stats?.[2]?.count || 0,
    hard: stats?.[3]?.count || 0
  });
}