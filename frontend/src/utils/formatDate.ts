export function formatDate(date: Date, options?: any) {
    return new Intl.DateTimeFormat('pr-BR', { 
      ...options,
      timeZone: 'UTC',
    }).format(date)
}