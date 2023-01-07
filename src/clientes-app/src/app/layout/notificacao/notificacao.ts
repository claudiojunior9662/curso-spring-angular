export class Notificacao {
  alertType?: NotificationType;
  message?: string;
}

export enum NotificationType {
  SUCCESS = 'alert alert-success alert-dismissible fade show',
  DANGER = 'alert alert-danger alert-dismissible fade show',
  WARNING = 'alert alert-warning alert-dismissible fade show',
  INFO = 'alert alert-info alert-dismissible fade show'
}
