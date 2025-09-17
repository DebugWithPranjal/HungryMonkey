export const levels = [
  {
    id: 1,
    header: `Welcome to the jungle! 
    <p>This is a game inspired by the classic <a href="https://flexboxfroggy.com" class="!text-green-400 underline cursor-pointer" target="__blank">Flexbox Froggy</a> designed to help you learn flex
          box using <a href="https://tailwindcss.com/" class="!text-green-400 underline cursor-pointer" target="__blank">Tailwind CSS</a>. Help our monkey buddy swing through the vines
          to grab some delicious bananas! 🍌 Use Tailwind classes to guide the
          monkey's moves. No need to memorize—just have fun and learn how to
          style and position elements intuitively! Let's kick things off by
          moving the monkey to the right using the <span class="text-green-400">justify-content </span>property.</p>`,
    description: `<p class="text-gray-700 text-md">
            In CSS, the \`justify-content\` property aligns items horizontally and accepts
            the following values: <strong>flex-start</strong>, <strong>flex-end</strong>, <strong>center</strong>, <strong>space-between</strong>, and <strong>space-around</strong>. In Tailwind CSS, these become utilty classes:
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
            <code class="text-green-500">justify-content: flex-end;</code> property in CSS
            moves Monkey to the right. Use the corresponding Tailwind utility <code class="text-green-500">justify-end</code>  class to achieve the same effect.
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
    header: `<p>Double Trouble! 🍌🍌</p>
    <p>Now we have two monkeys and two bananas! Use <code class="text-green-500">justify-content: center;</code> to align them at the center.</p>`,
    description: `<p class="text-gray-700 text-md">
            In CSS, the \`justify-content\` property aligns items horizontally and accepts
            the following values: <strong>flex-start</strong>, <strong>flex-end</strong>, <strong>center</strong>, <strong>space-between</strong>, and <strong>space-around</strong>. In Tailwind CSS, these become utilty classes:
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
            <code class="text-green-500">justify-content: center;</code> property in CSS
            moves the monkeys to the center. Use the corresponding Tailwind utility <code class="text-green-500">justify-center</code>  class to achieve the same effect.
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
            but the bananas are far apart this time. Help all of the monkeys reach a banana again!  
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
    header: `Oh no! The bananas are too high! 🍌🐵
          <p>
            Our monkey is lined up just right, but now the bananas are <strong>too high up</strong>! 
            They need to stretch their arms to reach them. Let's help the monkey by
          moving the monkey to the top using the <span class="text-green-400">align-items </span>property.
          </p>`,
    description: `<p class="text-gray-700 text-md">
          In CSS, the \`align-items\` property aligns items vertically and accepts
          the following values: <strong>flex-start</strong>, <strong>flex-end</strong>, <strong>center</strong>, <strong>space-between</strong>, and <strong>space-around</strong>. In Tailwind CSS, these become utilty classes:
        </p>
        <ul class="list-disc list-inside text-gray-700">
          <li>
            <strong>items-start</strong>: Items align to the left side.
          </li>
          <li>
            <strong>items-end</strong>: Items align to the right side.
          </li>
          <li>
            <strong>items-center</strong>: Items align at the center.
          </li>
          <li>
            <strong>items-between</strong>: Items have equal spacing between
            them.
          </li>
          <li>
            <strong>items-around</strong>: Items have equal spacing around
            them.
          </li>
        </ul>
        <p class="mt-2 text-gray-700">
          For example,
          <code class="text-green-500">align-items: flex-start;</code> property in CSS
          moves the monkeys to the top. Use the corresponding Tailwind utility <code class="text-green-500">items-start</code>  class to achieve the same effect.
        </p>
      </div>`,
    hint: "Use `items-start` to move the monkeys to the bottom so they can grab their bananas.",
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
            their bananas are hanging! Remember to use Tailwind's utility classes.
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
            Help our monkey buddy swing through the vines to grab all the delicious bananas! 🍌
            Again they need to be perfectly positioned to grab their bananas—both <strong>horizontally</strong> and <strong>vertically</strong>.
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
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜
            <p>
            The jungle animals are excited for their feast, but something went wrong!  
            Their favorite foods are all mixed up—each animal is standing in the wrong place!  
             Fix the lineup by using <span class="text-green-400">flex-direction </span>property. 
            so each animal stands directly near their favorite food!
          </p>`,
    description: `<p class="text-gray-700 text-md">
          In CSS, the \`flex-direction\` property defines the direction of the flex items and accepts
          the following values: <strong>row</strong>, <strong>row-reverse</strong>, <strong>column</strong>, and <strong>column-reverse</strong>. In Tailwind CSS, these become utilty classes:
        </p>
        <ul class="list-disc list-inside text-gray-700">
          <li>
            <strong>flex-row</strong>: Items align in a horizontal row (default).
          </li>
          <li>
            <strong>flex-row-reverse</strong>: Items align in a horizontal row but in reverse order.
          </li>
          <li>
            <strong>flex-col</strong>: Items align in a vertical column.
          </li>
          <li>
            <strong>flex-col-reverse</strong>: Items align in a vertical column but in reverse order.
          </li>
        </ul> 
        <p class="mt-2 text-gray-700">
          For example,
          <code class="text-green-500">flex-direction: column;</code> in CSS stacks the monkeys vertically. The Tailwind equivalent is simply <code class="text-green-500">flex-col</code>.
        </p>
      </div>`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "flex-col justify-between",
    initialPosition: "flex-row justify-between",
    animals: ["monkey", "hare", "panda"],
    foods: ["banana", "carrot", "bamboo"],
    targetAnimal: "jungle",
    targetFood: "foods",
  },
  {
    id: 9,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜`,
    description: `<p class="text-gray-700 text-md">
    In CSS, the \`flex-direction\` property defines the direction of the flex items and accepts
    the following values: <strong>row</strong>, <strong>row-reverse</strong>, <strong>column</strong>, and <strong>column-reverse</strong>. In Tailwind CSS, these become utilty classes:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>
      <strong>flex-row</strong>: Items align in a horizontal row (default).
    </li>
    <li>
      <strong>flex-row-reverse</strong>: Items align in a horizontal row but in reverse order.
    </li>
    <li>
      <strong>flex-col</strong>: Items align in a vertical column.
    </li>
    <li>
      <strong>flex-col-reverse</strong>: Items align in a vertical column but in reverse order.
    </li>
  </ul> 
  <p class="mt-2 text-gray-700">
    For example,
    <code class="text-green-500">flex-direction: row-reverse;</code> in CSS stacks the monkeys in a row but in reverse order. The Tailwind equivalent is simply <code class="text-green-500">flex-row-reverse</code>.
  </p>
  </div>`,
    hint: "Use `flex-row-reverse` to stack animals and food in a reverse row.",
    targetClasses: "flex-row-reverse justify-between items-center",
    initialPosition: "flex-row justify-between items-center",
    animals: ["monkey", "hare", "panda"],
    foods: ["banana", "carrot", "bamboo"],
    targetAnimal: "jungle",
    targetFood: "foods",
  },
  {
    id: 10,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜`,
    description: `<p class="text-gray-700 text-md">
            Now help the animals with their own food. Although they seem close, it will take both \`flex-direction\` and \`justify-content\` to get them there.
            Notice that when you set the direction to a reversed row or column, start and end are also reversed. 
          </p>`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "flex-row-reverse justify-end items-center",
    initialPosition: "flex-row justify-start items-center",
    animals: ["monkey", "hare", "panda"],
    foods: ["banana", "carrot", "bamboo"],
    targetAnimal: "jungle",
    targetFood: "foods",
  },
  {
    id: 11,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜`,
    description: `<p class="text-gray-700 text-md">
            Now help the animals with their own food. Although they seem close, it will take both \`flex-direction\` and \`align-items\` to get them there.
            Notice that when the flex direction is a column, justify-content changes to the vertical and align-items to the horizontal.          </p>`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "flex-col items-end justify-between",
    initialPosition: "flex-row items-start justify-between",
    animals: ["monkey", "hare", "panda"],
    foods: ["banana", "carrot", "bamboo"],
    targetAnimal: "jungle",
    targetFood: "foods",
  },
  {
    id: 12,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜`,
    description: `<p class="text-gray-700 text-md">
            Now help the animals with their own food. Although they seem close, it will take both \`flex-direction\` and \`align-items\` to get them there.
            Notice that when the flex direction is a column, justify-content changes to the vertical and align-items to the horizontal.          </p>`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "flex-col-reverse items-end justify-between",
    initialPosition: "flex-row items-start justify-between",
    animals: ["monkey", "hare", "panda"],
    foods: ["banana", "carrot", "bamboo"],
    targetAnimal: "jungle",
    targetFood: "foods",
  },
  {
    id: 13,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜`,
    description: `<p class="text-gray-700 text-md">
            Now help the animals with their own food. Although they seem close, it will take all three \`flex-direction\`, \`justify-content\`, \`align-items\` to get them there.
                 </p>`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "flex-row-reverse justify-center items-end",
    initialPosition: "flex-row justify-between items-start",
    animals: ["monkey", "hare", "panda"],
    foods: ["banana", "carrot", "bamboo"],
    targetAnimal: "jungle",
    targetFood: "foods",
  },
  {
    id: 14,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜 
    <p>
    Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the <span class="text-green-400">order </span> property to individual items. 
    </p> How can you move the hare to the end of the line?`,
    description: `<p class="text-gray-700 text-md">
    In CSS, the \`order\` property controls the order in which flex items appear in the container. 
    By default, all items have <strong>order: 0</strong>, but you can set positive or negative values to move items around.
    In Tailwind CSS, these are utility classes:
  </p>
  <ul class="list-disc list-inside text-gray-700">
    <li>
      <strong>order-1</strong>: Moves the item after items with lower order values.
    </li>
    <li>
      <strong>order-2</strong>: Moves the item further down the order.
    </li>
    <li>
        <strong>-order-1</strong>:  Moves the item before items with higher order values (negative pushes it toward the front).
      </li>
    <li>
      <strong>order-first</strong>: Forces the item to appear first, regardless of other order values.
    </li>
    <li>
      <strong>order-last</strong>: Forces the item to appear last.
    </li>
    <li>
      <strong>order-none</strong>: Resets the order back to the default (0).
    </li>
  </ul> 
  <p class="mt-2 text-gray-700">
    For example, 
    <code class="text-green-500">order: last;</code> will move the hare to the end of the line. The Tailwind equivalent is simply <code class="text-green-500">order-last</code>.
  </p>
`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "order-last",
    initialPosition: "order-none",
    animals: ["monkey", "hare", "panda"],
    foods: ["banana", "bamboo", "carrot"],
    targetAnimal: "hare",
    targetFood: "foods",
  },
  {
    id: 15,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜 
    <p>
    Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the <span class="text-green-400">order </span> property to individual items. 
    </p> How can you help the hare grab its carrot?`,
    description: `<p class="text-gray-700 text-md">
    In CSS, the \`order\` property controls the order in which flex items appear in the container. 
    By default, all items have <strong>order: 0</strong>, but you can set positive or negative values to move items around.
    In Tailwind CSS, these are utility classes:
    </p>
    <ul class="list-disc list-inside text-gray-700">
      <li>
        <strong>order-1</strong>: Moves the item after items with lower order values.
      </li>
      <li>
        <strong>order-2</strong>: Moves the item further down the order.
      </li>
      <li>
        <strong>-order-1</strong>:  Moves the item before items with higher order values (negative pushes it toward the front).
      </li>
      <li>
        <strong>order-first</strong>: Forces the item to appear first, regardless of other order values.
      </li>
      <li>
        <strong>order-last</strong>: Forces the item to appear last.
      </li>
      <li>
        <strong>order-none</strong>: Resets the order back to the default (0).
      </li>
    </ul> 
    <p class="mt-2 text-gray-700">
      For example, 
      <code class="text-green-500">order: 2;</code> will order the hare to be second in line. The Tailwind equivalent is simply <code class="text-green-500">order-2</code>.
`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "order-1",
    initialPosition: "order-none",
    animals: ["hare", "monkey", "panda"],
    foods: ["banana", "carrot", "bamboo"],
    targetAnimal: "hare",
    targetFood: "foods",
  },
  {
    id: 15,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜`,
    description: `<p class="text-gray-700 text-md">
    Use the \`order\` property to send the hare to his carrot.</p>`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "-order-1",
    initialPosition: "order-none",
    animals: ["monkey", "monkey", "monkey", "hare", "monkey"],
    foods: ["carrot", "banana", "banana", "banana", "banana"],
    targetAnimal: "hare",
    targetFood: "foods",
  },
  {
    id: 16,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜
    <p>
    Another property you can apply to individual items is <span class="text-green-400">align-self </span> property to individual items.
    </p> How can you move the monkey to the bottom of the vine?`,
    description: `<p class="text-gray-700 text-md">
      In CSS, the \`align-self\` property controls the vertical alignment of a single flex item, overriding the container’s <code>align-items</code> property. It accepts the following values: <strong>flex-start</strong>, <strong>flex-end</strong>, <strong>center</strong>, <strong>stretch</strong>, and <strong>baseline</strong>. In Tailwind CSS, these become utility classes:
    </p>
    <ul class="list-disc list-inside text-gray-700">
      <li>
        <strong>self-start</strong>: Aligns the item to the top.
      </li>
      <li>
        <strong>self-end</strong>: Aligns the item to the bottom.
      </li>
      <li>
        <strong>self-center</strong>: Aligns the item in the center vertically.
      </li>
      <li>
        <strong>self-stretch</strong>: Stretches the item to fill the container (default).
      </li>
      <li>
        <strong>self-baseline</strong>: Aligns the item based on its text baseline.
      </li>
    </ul>
    <p class="mt-2 text-gray-700">
      For example, 
      <code class="text-green-500">align-self: center;</code> in CSS places a monkey at the bottom of the vine. The Tailwind equivalent is <code class="text-green-500">self-center</code>.
    </p>
    </div>
`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "self-center",
    initialPosition: "",
    animals: ["hare", "hare", "monkey", "hare", "hare"],
    foods: ["carrot", "carrot", "banana", "carrot", "carrot"],
    targetAnimal: "monkey",
    targetFood: "banana",
  },
  {
    id: 17,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜`,
    description: `<p class="text-gray-700 text-md">
  Combine \`order\` with \`align-self\` to help the frogs to their destinations.</p>
    </div>
`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "order-last self-end",
    initialPosition: "",
    animals: ["monkey", "hare", "monkey", "hare", "hare"],
    foods: ["carrot", "carrot", "carrot", "banana", "banana"],
    targetAnimal: "monkey",
    targetFood: "banana",
  },
  {
    id: 18,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜
    <p>Oh no! The animals are all squeezed onto a single row. Spread them out using the <span class="text-green-400">flex-wrap</span> property.</p>`,
    description: `<p class="text-gray-700 text-md">
      In CSS, the \`flex-wrap\` property controls whether flex items stay on a single line or wrap onto multiple lines when they overflow the container. It accepts the following values: <strong>nowrap</strong>, <strong>wrap</strong>, and <strong>wrap-reverse</strong>. In Tailwind CSS, these become utility classes:
    </p>
    <ul class="list-disc list-inside text-gray-700">
      <li>
        <strong>flex-nowrap</strong>: All items stay on one line (default).
      </li>
      <li>
        <strong>flex-wrap</strong>: Items wrap onto a new line when needed.
      </li>
      <li>
        <strong>flex-wrap-reverse</strong>: Items wrap onto a new line in reverse order.
      </li>
    </ul>
    <p class="mt-2 text-gray-700">
      For example, 
      <code class="text-green-500">flex-wrap: wrap;</code> in CSS allows monkeys to move to the next line if the vine is too short. The Tailwind equivalent is <code class="text-green-500">flex-wrap</code>.
    </p>
    </div>
`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "flex-wrap",
    initialPosition: "",
    animals: [
      "hare",
      "hare",
      "hare",
      "hare",
      "hare",
      "monkey",
      "monkey",
    ],
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
  {
    id: 19,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜
    <p>Oh no! The animals are all squeezed onto a single row. Spread them out using the <span class="text-green-400">flex-wrap</span> property.</p>`,
    description: `<p class="text-gray-700 text-md">
      In CSS, the \`flex-wrap\` property controls whether flex items stay on a single line or wrap onto multiple lines when they overflow the container. It accepts the following values: <strong>nowrap</strong>, <strong>wrap</strong>, and <strong>wrap-reverse</strong>. In Tailwind CSS, these become utility classes:
    </p>
    <ul class="list-disc list-inside text-gray-700">
      <li>
        <strong>flex-nowrap</strong>: All items stay on one line (default).
      </li>
      <li>
        <strong>flex-wrap</strong>: Items wrap onto a new line when needed.
      </li>
      <li>
        <strong>flex-wrap-reverse</strong>: Items wrap onto a new line in reverse order.
      </li>
    </ul>
    <p class="mt-2 text-gray-700">
      For example, 
      <code class="text-green-500">flex-wrap: wrap-reverse;</code> in CSS allows monkeys to move to the next line in reverse order if the vine is too short. The Tailwind equivalent is <code class="text-green-500">flex-wrap-reverse</code>.
    </p>
    </div>
`,  
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "flex-wrap-reverse",
    initialPosition: "",
    animals: [
      "hare",
      "hare",
      "hare",
      "hare",
      "hare",
      "monkey",
      "monkey",
    ],
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
  {id: 20,
    header: `Jungle Feast in Chaos! 🍽️🐘🐒🦜`,
    description: `<p class="text-gray-700 text-md">
    Help this army of animals form three orderly columns using a combination of \`flex-direction\` and \`flex-wrap\`.</p>`,
    hint: "Use `flex-col` to stack animals and food in a vertical column.",
    targetClasses: "flex-col flex-wrap",
    initialPosition: "",
    animals: [
      "hare",
      "hare",
      "hare",
      "hare",
      "hare",
      "hare",
      "hare",
      "monkey",
      "monkey",
      "monkey",
      "monkey",
      "monkey",
      "monkey",
      "monkey",
      "panda",
      "panda",
      "panda",
      "panda",
      "panda",
      "panda",
      "panda",
    ],
    foods: [
      "carrot",
      "carrot",
      "carrot",
      "carrot",
      "carrot",
      "carrot",
      "carrot",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "bamboo",
      "bamboo",
      "bamboo",
      "bamboo",
      "bamboo",
      "bamboo",
      "bamboo",
    ],
    targetAnimal: "jungle",
    targetFood: "foods",
    animalClasses: "!w-16 !h-16",
  }
];
