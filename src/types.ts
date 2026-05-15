export enum ViewState {
  HOME = 'home',
  STATUS = 'status',
  COMMUNITY = 'community',
  WELCOME = 'welcome',
  ONBOARDING = 'onboarding',
}

export interface Referral {
  id: string;
  name: string;
  status: 'invited' | 'registering' | 'active' | 'rewarded';
  date: string;
  rewardType: 'voucher' | 'shipping';
}
