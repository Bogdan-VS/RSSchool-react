export const textInputValidate = (value: string) => {
  return value.length > 5;
};

// export const validate = (name: string) => {
//   let invalidName = '';

//   if (this.inputRef.current!.value.length < 5) {
//     invalidName = 'length of name must to be more than 5';
//   }

//   if (invalidName) {
//     this.setState({ invalidName, submitButtonActive: false });
//     return false;
//   }

//   return true;
// };
