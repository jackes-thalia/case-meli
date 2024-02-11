'use client'

import React from 'react'
import { Button, IconButton, TextField, Typography } from '@mui/material'
import { StyledThirdStep } from './ThirdStep.styles'
import LocationInfo from '../LocationInfo/LocationInfo'
import CloseIcon from '@mui/icons-material/Close'
import { StepContext } from '@/presentation/providers/StepProvider'

const ThirdStep = () => {
  const [filesToUpload, setFilesToUpload] = React.useState<File[]>([])
  const { nextStep } = React.useContext(StepContext)

  const addFiles = (files: File[]) => {
    setFilesToUpload((currentFiles) => {
      return [...currentFiles, ...files]
    })
  }
  const onFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    if (!files) {
      return
    }
    const sumUploads = filesToUpload.length + files.length
    if (sumUploads > 3) {
      alert('Você só pode enviar no máximo 3 arquivos')
      return
    }
    console.log(files)
    let valid = true
    Array.from(files).forEach((file) => {
      if (file.size > 30 * 1000 * 1000) {
        valid = false
      }
    })
    if (!valid) {
      event.target.value = ''
      alert('O arquivo não pode ser maior que 30mb')
      return
    }
    addFiles(Array.from(files))
  }
  const removeFile = (keyToRemove: number) => {
    setFilesToUpload((currentFiles) => {
      return currentFiles.filter((_, key) => key !== keyToRemove)
    })
  }
  return (
    <StyledThirdStep>
      <LocationInfo />
      <h2>Dados da ocorrência</h2>

      <div className="upload-content">
        <section>
          <Typography>Upload de evidências</Typography>
          <Typography>
            Anexe arquivos que facilitem a análise da ocorrência
          </Typography>
          <Button variant="contained" component="label">
            Adicionar arquivo
            <input
              onChange={onFileUpload}
              name="files[]"
              hidden
              type="file"
              multiple
            />
          </Button>
          {filesToUpload.length > 0 && (
            <ul className="files-list">
              {filesToUpload.map((file, key) => (
                <li key={file.name}>
                  <span title={file.name}>{file.name}</span>
                  <IconButton
                    sx={{
                      px: 0,
                      py: 0,
                    }}
                    size="small"
                    aria-label="delete"
                    onClick={() => removeFile(key)}
                  >
                    <CloseIcon />
                  </IconButton>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <Typography>Observações</Typography>
          <TextField
            name="comments"
            placeholder="Digite uma observação"
            type="text"
            variant="outlined"
            size="medium"
            fullWidth
            multiline
            inputProps={{ maxLength: 140 }}
            rows={7}
            sx={{ mt: 3 }}
          />
        </section>
      </div>

      <Button
        variant="contained"
        size="large"
        sx={{ mt: 6 }}
        onClick={nextStep}
      >
        Avançar
      </Button>
    </StyledThirdStep>
  )
}

export default ThirdStep
