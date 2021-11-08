export interface toastAttribute {
  id: string;
  color: string;
  text: string;
  onDismissClick: (id: string) => void;
}
