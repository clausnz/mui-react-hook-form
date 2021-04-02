import React from "react";

export interface BirthdayProps {
    label: string
    register: Function,
    errors: {
        birthday?: {
            message?: string
        }
    }
    setValue: Function
    resetManual: Function
}
