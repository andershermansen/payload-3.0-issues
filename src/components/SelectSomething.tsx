'use client'

import { useEffect, useState } from 'react'
import { useField } from '@payloadcms/ui/forms/useField'
import { SelectInput } from '@payloadcms/ui/fields/Select'

function SelectSomething({ path }: { path: string }) {
  const { value, setValue } = useField<string>({ path })
  const [options, setOptions] = useState<{ label: string; value: string }[]>([])

  useEffect(() => {
    const fetchOptions = async () => {
      const valuesFetchedAsyncFromSomewhere = [
        {
          label: 'Label 1',
          value: 'value1',
        },
        {
          label: 'Label 2',
          value: 'value2',
        },
      ]
      setOptions(valuesFetchedAsyncFromSomewhere)
      console.log('options updated to ', valuesFetchedAsyncFromSomewhere)
    }
    fetchOptions()
  }, [])

  const onChange = (selectedOptions: any) => {
    const selected = selectedOptions.map((option: any) => option.value)
    setValue(selected)
  }

  return (
    <div>
      <label className="field-label">Choose something</label>
      <SelectInput
        path={path}
        name={path}
        options={options}
        value={value}
        hasMany={true}
        onChange={onChange}
      />
    </div>
  )
}

export default SelectSomething
