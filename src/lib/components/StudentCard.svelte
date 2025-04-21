<script lang="ts">
  import { getPassedStatusByStudentId } from "../utils";
    import type { Student } from "../types";

    interface Props {
        student: Student;
    }
    let { student }: Props = $props();
</script>

<div class="card">
    <h2>{student.name}</h2>
    <div class="row">
        <span class="title">Age:</span>
        <span class="value">{student.age > 0 ? student.age.toString() : 'Invalid Birthdate'}</span>
    </div>
    <div class="row">
        <span class="title">Average Score:</span>
        <span class="value">{student.averageScore.toString()}</span>
    </div>
    <div class="row">
        <span class="title">Active:</span>
        <span class="value">{student.activeLabel}</span>
    </div>
    <div class="row">
        <span class="title">Passed:</span>
        <span class="value">{getPassedStatusByStudentId(student.id) ? 'Yes' : 'No'}</span>
    </div>
    <div class="row">
        <span class="title">ID:</span>
        <span class="value">{student.id}</span>
    </div>
</div>

<style>
    .card{
        min-width: 322px;
        min-height: 200px;
        box-shadow: 0px 6px 20px rgba(86, 87, 75, 0.14);
        border-radius: 6px;
        padding: 20px;
        background-color: var(--color-white);
    }
    h2 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 10px;
        font-family: 'Verdana';
    }

    .row {
        display: flex;
        justify-content: space-between;
    }

    .title {
        font-family: var(--verdana-font);
        font-weight: 400;
        font-size: 20px;
        letter-spacing: -0.04em;
        color: var(--color-secondary);
    }
    .value {
        font-size: 20px;
        font-weight: 700;
        color: var(--color-black);
    }

    @media (max-width: 640px) {
        .card {
            width: 100%;
        }
        h2 {
            font-size: 20px;
        }
        .title, .value {
            font-size: 16px;
        }
    }

</style>