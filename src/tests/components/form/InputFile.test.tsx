import React, { createRef } from 'react';

import { render, fireEvent } from '@testing-library/react';
import { FileInput } from '../../../components/form';
import { vi } from 'vitest';

describe('FileInput', () => {
  it('render the label', () => {
    const label = 'Choose file';
    const { getByLabelText } = render(<FileInput label={label} inputFileRef={createRef()} />);
    expect(getByLabelText(label)).toBeInTheDocument();
  });

  it('render type file', () => {
    const { getByLabelText } = render(<FileInput label="Choose file" inputFileRef={createRef()} />);
    const inputElement = getByLabelText('Choose file') as HTMLInputElement;
    expect(inputElement.type).toBe('file');
  });

  it('should call the onChange function when a file is selected', () => {
    const onChange = vi.fn<[File]>();
    const inputFileRef = createRef<HTMLInputElement>();
    const { getByLabelText } = render(
      <FileInput label="Choose file" inputFileRef={inputFileRef} onChange={onChange} />
    );
    const file = new File(['hello'], 'hello.txt', { type: 'text/plain' });
    const fileObjectUrl = 'https://example.com/file.txt';
    window.URL.createObjectURL = vi.fn(() => fileObjectUrl);
    const inputElement = getByLabelText('Choose file') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { files: [file] } });
    expect(inputElement.files).toHaveLength(1);
    expect(inputElement.files?.[0]).toBe(file);
  });

  it('render the error message', () => {
    const error = 'File size exceeds the limit';
    const { getByText } = render(
      <FileInput label="Choose file" error={error} inputFileRef={createRef()} />
    );
    expect(getByText(error)).toBeInTheDocument();
  });
});
