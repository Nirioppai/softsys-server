import { Document } from 'mongoose';

export type personSchema = {
    id: number;
    avatar: string;
    department: string;
    name: string;
    title: string;
    totalReports: string;
};

export type childrenSchema = {
    id: number;
    person: personSchema;
    hasChild: boolean;
    hasParent: boolean;
    isHighlight: boolean;
};

export default interface IOrganizationChart extends Document {
    id: number;
    person: personSchema;
    hasChild: boolean;
    hasParent: boolean;
    isHighlight: boolean;
    children: childrenSchema;
}
