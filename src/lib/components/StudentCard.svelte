<script lang="ts">
  import { getPassedStatusByStudentId } from "../utils";
    type Student = {
        id: string;
        name: string;
        age: number;
        averageScore: number;
        activeLabel: 'Yes' | 'No';
    };
    interface Props {
        student: Student;
    }

    let { student }: Props = $props();
</script>

<div class="card">
    <h2>{student.name}</h2>
    <div class="row">
        <span class="title">Age:</span>
        <span class="value">{student.age.toString()}</span>
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
        background-color: #FFFFFF;
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
        line-height: 100%;
        letter-spacing: -0.04em;
        color: #6F626B;
    }
    .value {
        font-size: 20px;
        font-weight: 700;
        color: #000000;
    }

</style>