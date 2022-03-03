import { createEffect } from "solid-js";

export default function About() {
  createEffect(() => {});

  return (
    <section class="bg-pink-100 text-gray-700 p-8">
      <h1 class="text-2xl font-bold">About</h1>

      <p class="mt-4">A page all about this website.</p>

      <p>
        <span>We love</span>
      </p>
    </section>
  );
}
