import { RemoteResponse } from '../../Constants/remote-response';

class Notifications {
  private readonly browser: BrowserMp;

  constructor() {
    this.browser = mp.browsers.new('package://HUD/Notifications/notifications.html');
    mp.events.add(RemoteResponse.NotificationSent, (type: string, text: string) => this.Display(type, text));
  }

  private Display(type: string, text: string): void {
    this.browser.execute(`window.notificationsUi.ShowNotification('${type}', '${text}');`);
  }
};

let notify: Notifications | undefined;
mp.events.add(RemoteResponse.CharacterSpawnSelected, () => notify = notify ? notify : new Notifications());