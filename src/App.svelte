<script lang="ts">
  import { studentsData } from './lib/data';
  import { calculateStudentAge, calculateStudentAverageScore, getStudentFullName } from './lib/utils';
  import StudentCard from './lib/components/StudentCard.svelte';
  import StudentsContainer from './lib/components/StudentsContainer.svelte';
  import StudentsToolbar from './lib/components/StudentsToolbar.svelte';
  import type { Student } from './lib/types';

  let students: Student[] = [];
  let error: string | null = null;
  try {
    students = studentsData.map((student) => ({
      id: student.id.toString(),
      name: getStudentFullName(student.firstName, student.lastName),
      age: calculateStudentAge(student.birthdate),
      averageScore: calculateStudentAverageScore(student.scores),
      activeLabel: student.isActive ? 'Yes' : 'No',
    }));
  } catch (e) {
    console.error('Error processing student data: ', e);
    error = `Error processing student data:  ${e instanceof Error ? e.message : String(e)}`;
  }

  let sorted: boolean = false;
  let filtered: boolean = false;
  let updatedStudents: Student[] = [...students];
  const applyFilters = (data: Student[]) => {
    if (filtered) {
      return data.filter((student) => student.activeLabel === 'Yes');
    }
    return data;
  };

  const applySort = (data: Student[]) => {
    if (sorted) {
      return [...data].sort((a, b) => a.name.localeCompare(b.name));
    }
    return data;
  };

  const updateStudents = () => {
    let result = [...students];
    result = applyFilters(result);
    result = applySort(result);
    updatedStudents = result;
  };

  const sortStudents = () => {
    sorted = !sorted;
    updateStudents();
  };

  const filterStudents = () => {
    filtered = !filtered;
    updateStudents();
  };
</script>

<main>
  <!-- The list of students -->
  <StudentsContainer title="Students">
    {#snippet toolbar()}
      <StudentsToolbar sortStudents={sortStudents} filterStudents={filterStudents} sorted={sorted} filtered={filtered} disabled={error !== null}/>
    {/snippet}
    {#if error}
      <p>{error}</p>
    {:else if students.length === 0}
      <p>No students found</p>
    {/if}
    {#each updatedStudents as student}
      <StudentCard
        student={student}
      />
    {/each}
  </StudentsContainer>
</main>

<style>
  :root {
      /* Spacing */
      --spacing-medium: 20px;
      --spacing-large: 30px;
      --spacing-xlarge: 40px;
      --spacing-xxlarge: 50px;

      /* Fonts */
      --tahoma-font: 'Tahoma', sans-serif;
      --verdana-font: 'Verdana', sans-serif;

      /* Colors */
      --color-primary: #4B3D47;
      --color-secondary: #6F626B;
      --color-background: #F7F3ED;
      --color-black: #000000;
      --color-white: #FFFFFF;
      --color-disabled: #B0A99F;
  }

  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--color-background);
  }
</style>