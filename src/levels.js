export const levels = [
  {
    id: 1,
    header: `Welcome to the jungle! This is a game designed to help you learn flex
          box using <a href="https://tailwindcss.com/" class="!text-green-400 underline cursor-pointer" target="__blank">Tailwind CSS</a>. Help our monkey buddy swing through the vines
          to grab some delicious bananas! 🍌 Use Tailwind classes to guide the
          monkey's moves. No need to memorize—just have fun and learn how to
          style and position elements intuitively! Let's kick things off by
          moving the monkey to the right using the <span class="text-green-400">justify-content </span>property.`,
    description: `<p class="text-gray-700 text-md">
            The \`justify-content\` property aligns items horizontally and accepts
            the following values:
          </p>
          <ul class="list-disc list-inside text-gray-700">
            <li>
              <strong>justify-start</strong>: Items align to the left side.
            </li>
            <li>
              <strong>justify-end</strong>: Items align to the right side.
            </li>
            <li>
              <strong>justify-center</strong>: Items align at the center.
            </li>
            <li>
              <strong>justify-between</strong>: Items have equal spacing between
              them.
            </li>
            <li>
              <strong>justify-around</strong>: Items have equal spacing around
              them.
            </li>
          </ul>
          <p class="mt-2 text-gray-700">
            For example,
            <code class="text-green-500">justify-content: flex-end;</code>
            moves Monkey to the right.
          </p>
        </div>`,
    hint: "Use `justify-center` to center horizontally and `items-center` to center vertically.",
    targetClasses: "justify-end",
    initialPosition: "justify-between",
    animals: ["monkey"],
    foods: ["banana"],
    targetAnimal: "jungle",
    targetFood: "foods",
  },
  {
    id: 2,
    header: `<p>Level 2: Double Trouble! 🍌🍌</p>
    <p>Now we have two monkeys and two bananas! Use <code class="text-green-500">justify-content: center;</code> to align them at the center.</p>`,
    description: `<p class="text-gray-700 text-md">
    The \`justify-content\` property aligns items horizontally and accepts
    the following values:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>
      <strong>justify-start</strong>: Items align to the left side.
    </li>
    <li>
      <strong>justify-end</strong>: Items align to the right side.
    </li>
    <li>
      <strong>justify-center</strong>: Items align at the center.
    </li>
    <li>
      <strong>justify-between</strong>: Items have equal spacing between
      them.
    </li>
    <li>
      <strong>justify-around</strong>: Items have equal spacing around
      them.
    </li>
  </ul>
  <p class="mt-2 text-gray-700">
    For example,
    <code class="text-green-500">justify-content: flex-end;</code>
    moves Monkey to the right.
  </p>
    </div>`,
    hint: "Use `justify-center` to align both monkeys and bananas at the center.",
    targetClasses: "justify-center",
    initialPosition: "justify-start",
    animals: ["monkey", "monkey"],
    foods: ["banana", "banana"],
    targetAnimal: "jungle",
    targetFood: "foods",
  },
  {
    id: 3,
    header: `Time to spread things out evenly! 🐵🍌🐵`,
    description: `<p class="text-gray-700 text-md">
            Now, we have three monkeys, each trying to grab a banana.
            Help all of the monkeys reach a banana! <br/> Hint - We need equal spacing
            <strong>around</strong> each monkey.
          </p>
         `,
    hint: "Use `justify-around` to create equal spacing around each monkey.",
    targetClasses: "justify-around",
    initialPosition: "justify-start",
    animals: ["monkey", "monkey", "monkey"],
    foods: ["banana", "banana", "banana"],
    targetAnimal: "jungle",
    targetFood: "foods",
  },
  {
    id: 4,
    header: `Even spacing between monkeys! 🐵 🍌 🐵 🍌 🐵`,
    description: `<p class="text-gray-700 text-md">
            The jungle is getting busier! We still have three monkeys and three bananas,
            but this time, but the bananas are far apart this time. Help all of the monkeys reach a banana again!  
           <br/> Hint - The bananas are positioned with equal space <strong>between</strong> each monkey.</p>`,
    hint: "Use `justify-between` to create equal spacing between each monkey.",
    targetClasses: "justify-between",
    initialPosition: "justify-start",
    animals: ["monkey", "monkey", "monkey"],
    foods: ["banana", "banana", "banana"],
    targetAnimal: "jungle",
    targetFood: "foods",
  },
  {
    id: 5,
    header: `Oh no! The bananas are too high! 🍌🐵`,
    description: `<p class="text-gray-700 text-md">
            Our monkey are lined up just right, but now the bananas are <strong>too high up</strong>! 
            They need to stretch their arms to reach them.
          </p>
          <p class="mt-2 text-gray-700">
            Use <code class="text-green-500">align-items: end;</code> to position the monkeys at the 
            <strong>bottom</strong> of the jungle, right under their bananas.
          </p>`,
    hint: "Use `items-end` to move the monkeys to the bottom so they can grab their bananas.",
    targetClasses: "items-start",
    initialPosition: "items-end",
    animals: ["monkey"],
    foods: ["banana"],
    targetAnimal: "jungle",
    targetFood: "foods",
  },
  {
    id: 6,
    header: `Positioning like a pro! 🏆🐵🍌`,
    description: `<p class="text-gray-700 text-md">
            Now it's time to put everything together! Our monkeys need to be perfectly 
            positioned to grab their bananas—both <strong>horizontally</strong> and 
            <strong>vertically</strong>.
          </p>
          <p class="mt-2 text-gray-700">
            Use <code class="text-green-500">justify-content: center;</code> and 
            <code class="text-green-500">align-items: center;</code> together to 
            bring the monkeys to the <strong>center of the jungle</strong>, where 
            their bananas are hanging!
          </p>`,
    hint: "Use `justify-center` and `items-center` together for perfect alignment!",
    targetClasses: "justify-center items-center",
    initialPosition: "justify-start items-start",
    animals: ["monkey"],
    foods: ["banana"],
    targetAnimal: "jungle",
    targetFood: "foods",
  },
  {
    id: 7,
    header: `Positioning like a pro! 🏆🐵🍌`,
    description: `<p class="text-gray-700 text-md">
            Now it's time to put everything together! Our monkeys need to be perfectly 
            positioned to grab their bananas—both <strong>horizontally</strong> and 
            <strong>vertically</strong>.
          </p>
          <p class="mt-2 text-gray-700">
            Use <code class="text-green-500">justify-content: center;</code> and 
            <code class="text-green-500">align-items: center;</code> together to 
            bring the monkeys to the <strong>center of the jungle</strong>, where 
            their bananas are hanging!
          </p>`,
    hint: "Use `justify-center` and `items-center` together for perfect alignment!",
    targetClasses: "justify-between items-end",
    initialPosition: "justify-start items-start",
    animals: ["monkey", "monkey", "monkey"],
    foods: ["banana", "banana", "banana"],
    targetAnimal: "jungle",
    targetFood: "foods",
  },
  {
    id: 8,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜`,
    description: `<p class="text-gray-700 text-md">
            The jungle animals are **excited for their feast**, but something went wrong!  
            Their favorite foods **are all mixed up**—each animal is standing in the wrong place!  
          </p>
          <p class="mt-2 text-gray-700">
            **Fix the lineup** by using <code class="text-green-500">flex-col;</code>  
            so each animal stands directly **above their favorite food!**  
          </p>`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "flex-row-reverse justify-between items-center",
    initialPosition: "flex-row justify-between items-end",
    animals: ["monkey", "hare", "panda"],
    foods: ["banana", "carrot", "bamboo"],
    targetAnimal: "jungle",
    targetFood: "foods",
  },
  {
    id: 9,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜`,
    description: `<p class="text-gray-700 text-md">
            The jungle animals are **excited for their feast**, but something went wrong!  
            Their favorite foods **are all mixed up**—each animal is standing in the wrong place!  
          </p>
          <p class="mt-2 text-gray-700">
            **Fix the lineup** by using <code class="text-green-500">flex-col;</code>  
            so each animal stands directly **above their favorite food!**  
          </p>`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "flex-col justify-between items-start",
    initialPosition: "flex-row justify-between items-start",
    animals: ["monkey", "hare", "panda"],
    foods: ["banana", "carrot", "bamboo"],
    targetAnimal: "jungle",
    targetFood: "foods",
  },
  {
    id: 10,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜`,
    description: `<p class="text-gray-700 text-md">
            The jungle animals are **excited for their feast**, but something went wrong!  
            Their favorite foods **are all mixed up**—each animal is standing in the wrong place!  
          </p>
          <p class="mt-2 text-gray-700">
            **Fix the lineup** by using <code class="text-green-500">flex-col;</code>  
            so each animal stands directly **above their favorite food!**  
          </p>`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "flex-col-reverse justify-around items-end",
    initialPosition: "flex-row justify-start items-start",
    animals: ["monkey", "hare", "panda"],
    foods: ["banana", "carrot", "bamboo"],
    targetAnimal: "jungle",
    targetFood: "foods",
  },
  {
    id: 11,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜`,
    description: `<p class="text-gray-700 text-md">
            The jungle animals are **excited for their feast**, but something went wrong!  
            Their favorite foods **are all mixed up**—each animal is standing in the wrong place!  
          </p>
          <p class="mt-2 text-gray-700">
            **Fix the lineup** by using <code class="text-green-500">flex-col;</code>  
            so each animal stands directly **above their favorite food!**  
          </p>`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "order-last",
    initialPosition: "order-none",
    animals: ["monkey", "hare", "panda"],
    foods: ["banana", "bamboo", "carrot"],
    targetAnimal: "hare",
    targetFood: "foods",
  },
  {
    id: 12,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜`,
    description: `<p class="text-gray-700 text-md">
            The jungle animals are **excited for their feast**, but something went wrong!  
            Their favorite foods **are all mixed up**—each animal is standing in the wrong place!  
          </p>
          <p class="mt-2 text-gray-700">
            **Fix the lineup** by using <code class="text-green-500">flex-col;</code>  
            so each animal stands directly **above their favorite food!**  
          </p>`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "order-first",
    initialPosition: "order-last",
    animals: ["monkey", "hare", "hare", "hare", "hare"],
    foods: ["banana", "carrot", "carrot", "carrot", "carrot"],
    targetAnimal: "hare",
    targetFood: "foods",
  },
  {
    id: 13,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜`,
    description: `<p class="text-gray-700 text-md">
            The jungle animals are **excited for their feast**, but something went wrong!  
            Their favorite foods **are all mixed up**—each animal is standing in the wrong place!  
          </p>
          <p class="mt-2 text-gray-700">
            **Fix the lineup** by using <code class="text-green-500">flex-col;</code>  
            so each animal stands directly **above their favorite food!**  
          </p>`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "self-center",
    initialPosition: "",
    animals: ["hare", "hare", "monkey", "hare", "hare"],
    foods: ["carrot", "carrot", "banana", "carrot", "carrot"],
    targetAnimal: "monkey",
    targetFood: "banana",
  },
  {
    id: 14,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜`,
    description: `<p class="text-gray-700 text-md">
            The jungle animals are **excited for their feast**, but something went wrong!  
            Their favorite foods **are all mixed up**—each animal is standing in the wrong place!  
          </p>
          <p class="mt-2 text-gray-700">
            **Fix the lineup** by using <code class="text-green-500">flex-col;</code>  
            so each animal stands directly **above their favorite food!**  
          </p>`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "order-last self-end",
    initialPosition: "",
    animals: ["monkey", "hare", "monkey", "hare", "hare"],
    foods: ["carrot", "carrot", "carrot", "banana", "banana"],
    targetAnimal: "monkey",
    targetFood: "banana",
  },
  {
    id: 15,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜`,
    description: `<p class="text-gray-700 text-md">
            The jungle animals are **excited for their feast**, but something went wrong!  
            Their favorite foods **are all mixed up**—each animal is standing in the wrong place!  
          </p>
          <p class="mt-2 text-gray-700">
            **Fix the lineup** by using <code class="text-green-500">flex-col;</code>  
            so each animal stands directly **above their favorite food!**  
          </p>`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "flex-wrap",
    initialPosition: "",
    animals: ["hare", "hare", "hare", "hare", "hare", "monkey", "monkey"],
    foods: [
      "carrot",
      "carrot",
      "carrot",
      "carrot",
      "carrot",
      "banana",
      "banana",
    ],
    targetAnimal: "jungle",
    targetFood: "foods",
  },
];
