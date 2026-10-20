// [question, options, correctIndex]
export const QUIZZES = {
  Python: [['What does len([1,2,3]) return?', ['2', '3', '4', 'Error'], 1], ['Which keyword defines a function?', ['func', 'function', 'def', 'lambda only'], 2], ['What is the type of {1:"a"}?', ['list', 'set', 'tuple', 'dict'], 3]],
  SQL: [['Which clause filters rows?', ['WHERE', 'ORDER BY', 'GROUP', 'LIMIT'], 0], ['Which join keeps unmatched left rows?', ['INNER', 'LEFT', 'CROSS', 'SELF only'], 1], ['Which function counts rows?', ['SUM', 'AVG', 'COUNT', 'ROUND'], 2]],
  JavaScript: [['Which declares a block-scoped constant?', ['var', 'let', 'const', 'def'], 2], ['What does === check?', ['Value only', 'Type only', 'Value and type', 'Reference only'], 2], ['Which method adds to the end of an array?', ['push', 'pop', 'shift', 'slice'], 0]],
  'Data Structures': [['Which structure is LIFO?', ['Queue', 'Stack', 'Heap', 'Graph'], 1], ['Average lookup in a hash map?', ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'], 2], ['Which traversal goes level by level?', ['DFS', 'BFS', 'Inorder', 'Postorder'], 1]],
  'Web Development': [['Which HTML tag is semantic navigation?', ['<div>', '<nav>', '<span>', '<b>'], 1], ['Which CSS property enables flex layout?', ['display', 'float', 'clear', 'zoom'], 0], ['Which HTTP status means not found?', ['200', '301', '404', '500'], 2]],
}
export const PASS_MARK = 70
export const CATEGORY_SKILLS = {
  'Web Development': ['JavaScript', 'HTML/CSS', 'API Integration'],
  'Data Science': ['Python', 'Data Analysis', 'SQL'],
  'Artificial Intelligence': ['Python', 'Machine Learning', 'Problem Solving'],
  'Mobile Development': ['Java', 'API Integration', 'UI Design'],
  'Backend Development': ['Python', 'SQL', 'API Integration'],
  'Cloud/DevOps': ['Linux', 'CI/CD', 'Networking'],
  Other: ['Problem Solving', 'Data Structures'],
}
