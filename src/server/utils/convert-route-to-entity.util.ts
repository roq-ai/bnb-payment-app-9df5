const mapping: Record<string, string> = {
  invitations: 'invitation',
  organizations: 'organization',
  transactions: 'transaction',
  users: 'user',
  wallets: 'wallet',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
