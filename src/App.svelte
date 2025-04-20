<script lang="ts">
  import Hello from './lib/components/Hello.svelte';
  import DataPreview from './lib/components/DataPreview.svelte';
  import { studentsData } from './lib/data';

  type Student = {
    id: string;
    name: string;
    age: number;
    averageScore: number;
    activeLabel: 'Yes' | 'No';
  };

  // Replace mock example objects with the actual data from the studentsData array
  const students: Student[] = [
    {
      id: '1',
      name: 'Mary Example',
      age: 50,
      activeLabel: 'Yes',
      averageScore: 10,
    },
    {
      id: '2',
      name: 'Jade Test',
      age: 21,
      activeLabel: 'No',
      averageScore: 10,
    },
  ];
</script>

<main>
  <!-- Delete <Hello> -->
  <Hello></Hello>

  <!-- The list of students -->
  {#each students as student}
    <!-- Example content to showcase Svelte — replace with your own template  -->
    <div>
      <div>{student.name.toUpperCase()}</div>

      <p>
        {#if student.age > 25}
          Mature Student - {student.age} years old
        {:else}
          Young Student - {student.age} years old
        {/if}
      </p>

      Avg score: {student.averageScore}
      Active: {student.activeLabel}
    </div>
  {/each}

  <!-- Delete <DataPreview> -->
  <DataPreview value={studentsData}></DataPreview>
</main>

<style>
  main {
    padding: 30px;
  }
</style>
