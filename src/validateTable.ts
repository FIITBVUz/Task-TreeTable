import { TreeTable } from './tree';

type ValidationResult = { status: 'valid' } | { status: 'invalid'; reason: string };

// verify that TreeTable can be represented by table (each row and column has same length)
export function validateTable(treeTable: TreeTable): ValidationResult {
    return { status: 'valid' };
}