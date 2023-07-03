import * as yup from 'yup';

export const walletValidationSchema = yup.object().shape({
  altcoin_type: yup.string().required(),
  organization_id: yup.string().nullable(),
});
