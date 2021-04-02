import React from "react";

export interface NameProps {
    label: string,
    register: Function,
    errors: {
        name?: {
            message?: string
        }
    }
}
