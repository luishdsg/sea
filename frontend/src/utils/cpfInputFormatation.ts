function CpfInputFormatation (e: string, onChange:(value: string) => void) {
  let value = e.replace(/\D/g, "");
  if (value.length > 3) {
    value = value.replace(/^(\d{3})(\d)/, "$1.$2");
  }
  if (value.length > 6) {
    value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
  }

  if (value.length > 9) {
    value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
  }

  onChange(value);
};
export default CpfInputFormatation;
