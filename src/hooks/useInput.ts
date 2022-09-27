import React, { useState } from 'react';

interface Tech {
  value: number;
  label: string;
}

interface SeverTech {
  id: number;
  name: string;
}

const useInput = (initailValue: any) => {
  const [form, setForm] = useState(initailValue);

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const selectChange = (targetValue: any, targetName: any) => {
    const { name } = targetName;
    const { value } = targetValue;
    setForm({ ...form, [name]: value });
  };

  const multiSelectChange = (targetValue: any, targetAction: any) => {
    const { action, name } = targetAction;
    if (action === 'clear') {
      setForm({ ...form, [name]: [] });
    } else if (action === 'remove-value') {
      const filterdData = form[name].filter(
        (item: Tech) => item.value != targetAction.removedValue.value
      );
      setForm({ ...form, [name]: filterdData });
    } else {
      for (let item of targetValue) {
        setForm({ ...form, [name]: [...targetValue] });
      }
    }
  };

  const idNameToMultiSelect = (target: Tech[]) => {
    const changeProperty = target.reduce((acc: SeverTech[], cur: Tech) => {
      let id = cur.value;
      let name = cur.label;
      return [...acc, { id, name }];
    }, []);
    return changeProperty;
  };

  const datePickerChange = (date: Date) => {
    const dayToString = String(date.getDate());
    const dayString = String(date.getDate()).length < 2 ? '0' + dayToString : dayToString;

    console.log(dayString);

    const dateValue = `${date.getFullYear()}-${date.getMonth() + 1}-${dayString}`;
    setForm({ ...form, deadline: dateValue });
  };

  const editorChange = (value: string) => {
    setForm({ ...form, content: value });
  };

  const multiSelectUpload = (targetValue: any, targetAction: any) => {
    const { action, name } = targetAction;

    if (action === 'clear') {
      setForm({ ...form, [name]: [] });
    } else if (action === 'remove-value') {
      const filterdData = form[name].filter(
        (item: number) => item != targetAction.removedValue.value
      );
      setForm({ ...form, [name]: filterdData });
    } else {
      for (let item of targetValue) {
        let { value } = item;
        setForm({ ...form, [name]: [...form[name], value] });
      }
    }
  };

  return {
    form,
    changeInput,
    selectChange,
    multiSelectChange,
    datePickerChange,
    editorChange,
    idNameToMultiSelect,
    multiSelectUpload,
  };
};

export default useInput;
