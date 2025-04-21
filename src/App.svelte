<script lang="ts">
  import { studentsData } from './lib/data';
  import { calculateStudentAge, calculateStudentAverageScore, getStudentFullName } from './lib/utils';
  import StudentCard from './lib/components/StudentCard.svelte';
  import StudentsContainer from './lib/components/StudentsContainer.svelte';
  import StudentsToolbar from './lib/components/StudentsToolbar.svelte';
  import type { Student } from './lib/types';

  let students: Student[] = studentsData.map((student) => ({
      id: student.id.toString(),
      name: getStudentFullName(student.firstName, student.lastName),
      age: calculateStudentAge(student.birthdate),
      averageScore: calculateStudentAverageScore(student.scores),
      activeLabel: student.isActive ? 'Yes' : 'No',
  }));

  // Sorting and filtering logic
  let sorted: boolean = $state(false);
  let filtered: boolean = $state(false);
  
  let updatedStudents = $derived.by(() => {
      let result = [...students];
      if (filtered) {
        result = result.filter((student) => student.activeLabel === 'Yes');
      }
      if (sorted) {
        result = result.sort((a, b) => a.name.localeCompare(b.name));
      }
      return result;
  });

  const sortStudents = () => {
      sorted = !sorted;
  };
  const filterStudents = () => {
      filtered = !filtered;
  };
</script>

<main>
  <!-- The list of students displayed in a grid -->
  <StudentsContainer title="Students">
    {#snippet toolbar()}
      <StudentsToolbar sortStudents={sortStudents} filterStudents={filterStudents} sorted={sorted} filtered={filtered} disabled={updatedStudents?.length === 0}/>
    {/snippet}
    {#if updatedStudents?.length === 0}
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
  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--color-background);
  }
</style>