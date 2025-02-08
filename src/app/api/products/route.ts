import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify(products), { status: 200 });
}
