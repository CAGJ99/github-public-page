import { IUserData } from './data-user.intefrace';

export interface ISubscriptionData {
    id:        number;
    node_id:   string;
    name:      string;
    full_name: string;
    private:   boolean;
    owner:     IUserData;
}
