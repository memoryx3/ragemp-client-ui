export enum RemoteEvents {
  Registration = 'Remote:Auth:Registration',
  Login = 'Remote:Auth:Login',

  CharacterSelect = 'Remote:Character:Select',
  CharacterSpawnSelect = 'Remote:Character:SpawnSelect',
  CharacterEstablishContact = 'Remote:Character:EstablishContact',
  CharacterCreatorCreate = 'Remote:CharacterCreator:Create',
  CharacterCreatorChangeGender = 'Remote:CharacterCreator:ChangeGender',

  BankOpenCard = 'Remote:Bank:OpenCard',
  BankWithdraw = 'Remote:Bank:Withdraw',
  BankDeposit = 'Remote:Bank:Deposit',
  BankSend = 'Remote:Bank:Send',

  GasStationFillVehicle = 'Remote:GasStation:FillVehicle',

  HouseBuy = 'Remote:House:Buy',
  HouseSetOnSellState = 'Remote:House:SetOnSaleState',
  HouseSetLockState = 'Remote:House:SetLockState',
  HouseEnterExit = 'Remote:House:EnterExit',

  MainMenuOpen = 'Remote:MainMenu:Open',

  SettingsUpdate = 'Remote:Settings:Update'
};