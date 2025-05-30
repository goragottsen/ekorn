/**
 * Utility functions for student data processing:
 * - Age calculation from birthdate
 * - Average score based on scores from student data
 * - Full name formatting
 * - Pass/fail status calculation (passing grade - 75%)
 */
import { studentsData, type Scores } from "./data";

export const calculateStudentAge = (bdate: string): number => {
    if(!bdate || isNaN(Date.parse(bdate))) {
        return 0;
    }
    const birthDate = new Date(bdate);
    const today = new Date();
    return today.getFullYear() - birthDate.getFullYear();
}

export const calculateStudentAverageScore = (scores: Scores): number => {
    const numberOfSubjects = Object.keys(scores).length;
    if(numberOfSubjects < 1) {
        return 0;
    }
    const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);
    const averageScore = totalScore / numberOfSubjects;
    return Math.round(averageScore);
}

export const getStudentFullName = (firstName: string, lastName: string): string => {
    if(!firstName && !lastName) {
        return 'No valid name provided';
    }
    return `${firstName} ${lastName}`;
}

export const getPassedStatusByStudentId = (id: string) => {
    if(!id || isNaN(parseInt(id))) {
        return false;
    }
    const student = studentsData.find(student => student.id === parseInt(id));
    if (!student) {
        return false;
    }

    const passingScore = 75;
    return Object.values(student.scores).every(score => score >= passingScore);  
}