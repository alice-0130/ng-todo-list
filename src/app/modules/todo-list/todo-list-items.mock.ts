import { TodoListItem } from './types/todo-list-item.type';

export const MOCK_TODO_LIST_ITEMS: TodoListItem[] = [
  {
    checked: true,
    description: '등산',
    time: '11:00 am',
  },
  {
    checked: true,
    description: '앵귤러 공부',
    time: '13:00 pm',
  },
  {
    checked: true,
    description: 'RxJS 공부',
    time: '14:30 pm',
  },
  {
    checked: false,
    description: '도서관 책 반납하기',
    time: '17:00 am',
  },
  {
    checked: false,
    description: '장보기',
    time: '19:00 am',
  },
  {
    checked: false,
    description: '일기 쓰기',
    time: '22:00 am',
  },
];
